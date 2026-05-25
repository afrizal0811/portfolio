import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { glitchProps } from '../../constants/properties';
import useIsMobile from '../../hooks/useIsMobile';
import './style.css';

/**
 * Refactor utama:
 * - `pathname` tidak lagi dari props, tapi dari useLocation()
 * - `itemsPerPage` tidak perlu di state, diturunkan langsung dari isMobile
 * - `checkSelected` (array.some) diganti dengan Array.includes() yang lebih ringkas
 * - Logic render diperjelas dengan pemisahan antara multi-response dan single-response
 */
const TextOptions = (props) => {
  const {
    alert,
    choice,
    totalChoice,
    isFinished,
    linkId,
    option,
    setIsAvatarShow,
    setIsLinkClicked,
    setOption,
    setSelectedMultiOption,
  } = props;

  const { pathname } = useLocation();
  const isMobile = useIsMobile(768);
  const itemsPerPage = isMobile ? 1 : 3;

  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const isProjectPage = pathname === '/projects';
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';

  const selectedResponse = choice.find(({ id }) => id === option);
  const displayOptions = isAboutPage ? choice.filter((item) => item !== selectedResponse) : choice;

  const totalPages = totalChoice
    ? isMobile
      ? totalChoice - 1
      : Math.ceil(totalChoice / itemsPerPage)
    : 1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPaginatedData = (data, page) => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  };

  const paginatedData = getPaginatedData(displayOptions, currentPage);

  const index = linkId ?? 0;
  const responses = paginatedData[index]?.response;
  const isResponseArray = Array.isArray(responses);

  const visibleOptions =
    isProjectPage && isResponseArray
      ? paginatedData.filter(({ id }) => id === linkId)
      : paginatedData;

  useEffect(() => {
    setSelectedIds((prev) => [...new Set([...prev, option])]);
  }, [option]);

  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  const handleOptionClick = (id, response) => {
    if (isContactPage) {
      if (response?.type === 'E-mail') {
        alert();
        navigator.clipboard.writeText(response.link);
      } else {
        window.open(response.link);
      }
    } else if (isProjectPage) {
      setIsAvatarShow(false);
      if (isResponseArray) {
        setSelectedMultiOption(id);
        setIsLinkClicked(false);
      }
    } else {
      setOption(id);
    }
  };

  const renderMultiResponse = (buttonClassName) =>
    responses.map((response, index) => {
      const label = typeof response === 'object' && response !== null ? response.type : response;
      return (
        <button
          key={index}
          className={buttonClassName}
          onClick={() => handleOptionClick(index, response)}
        >
          {label}
        </button>
      );
    });

  const renderSingleResponse = (buttonClassName, id, response) => (
    <button
      key={id}
      className={buttonClassName}
      onClick={() => handleOptionClick(id)}
    >
      {response}
    </button>
  );

  return (
    <motion.div {...glitchProps('text')}>
      {isFinished && (
        <div className="options-content">
          {visibleOptions.map(({ id, response }) => {
            const isAlreadySelected = selectedIds.includes(id);
            const buttonClassName = isAlreadySelected && isAboutPage ? 'dimmer-option' : '';

            return isResponseArray
              ? renderMultiResponse(buttonClassName)
              : renderSingleResponse(buttonClassName, id, response);
          })}
        </div>
      )}
      {totalChoice && isFinished && (
        <div className="page-btn-container">
          <button
            className={'page-btn ' + (!isFirstPage ? 'blue-border-btn' : '')}
            disabled={isFirstPage}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          >
            &lt;
          </button>
          <button
            className={'page-btn ' + (!isLastPage ? 'blue-border-btn' : '')}
            disabled={isLastPage}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            &gt;
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default TextOptions;
