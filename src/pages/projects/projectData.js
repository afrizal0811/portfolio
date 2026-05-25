import { publicImagePaths } from '../../constants/imagePaths';

/**
 * Sebelumnya: help.js
 * Dipisah jadi dua file:
 * - projectData.js  → data statis (daftar proyek, pilihan awal)
 * - projectResponses.js → data dinamis (respons acak avatar)
 *
 * Tapi karena `choicesList` (fungsi dengan random) masih erat kaitannya
 * dengan data proyek, keduanya digabung di sini dengan nama yang lebih jelas.
 */

export const projectList = [
  {
    href: 'https://car-rental-afrizal.vercel.app/',
    id: 0,
    image: publicImagePaths.webCarRental,
    isPublic: true,
  },
  {
    href: '/private-project/moneypool',
    id: 1,
    image: publicImagePaths.webMoneypool,
    isPublic: false,
  },
  {
    href: '/private-project/bank-artatama',
    id: 2,
    image: publicImagePaths.webBank,
    isPublic: false,
  },
];

export const initialChoicesList = [
  {
    id: 0,
    response: `Sure!`,
    explain:
      'These are some of my projects. You can click on one of the pictures to see more information. Take a look!',
  },
];

const acceptResponses = [
  `Of course!`,
  `Absolutely!`,
  `Sure, thank you!`,
  `That would be nice!`,
  `Yes, I'd love to!`,
  `Yes, please!`,
  `That's a good idea!`,
  `Sounds great!`,
  `Let's go for it!`,
  `That would be great!`,
];

const refuseResponses = [
  `Not today.`,
  `Thanks, but I'm good.`,
  `Maybe next time.`,
  `I'm sorry, but I can't.`,
  `No, thanks.`,
  `That's alright.`,
  `Not for me, thanks.`,
  `I'll pass.`,
  `I'll have to skip it.`,
  `Nah, I'm alright.`,
];

/**
 * Menghasilkan daftar pilihan untuk Avatar berdasarkan proyek yang dipilih,
 * dengan respons acak untuk tombol accept dan refuse.
 * @param {number} random - Batas atas untuk pemilihan respons acak.
 */
export const getProjectChoicesList = (random) => {
  const acceptResponse = acceptResponses[Math.floor(Math.random() * random)];
  const refuseResponse = refuseResponses[Math.floor(Math.random() * random)];
  const responses = [acceptResponse, refuseResponse];

  return [
    {
      id: 0,
      response: responses,
      explain:
        'This is a web customer for car rental, created for the final exam at Binar Academy Bootcamp. Built with React.js and Bootstrap. Check this out!',
    },
    {
      id: 1,
      response: responses,
      explain: `This is a crowdfunding application built with React.js, Express.js, Styled Components, and Ant Design. The website is no longer accessible, but I can show you some screenshots. Check this out!`,
    },
    {
      id: 2,
      response: responses,
      explain: `This is a credit application built with React TypeScript, Express.js, Styled Components, and Ant Design. It's a private website, but I can show you some screenshots. Check this out!`,
    },
  ];
};
