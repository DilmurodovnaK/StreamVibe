// import { ThemeProvider, useTheme } from '@material-tailwind/react';
// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// export const Dark = () => {
//   const data=useLoaderData()
//   const { toggle, theme } = useTheme();

//   return (
//     <>
//       <ThemeProvider
//         theme={{
//           ...(theme === 'light' ? {} : { mode: 'dark' }),
//         }}
//       > 
//         <button onClick={() =>toggleTheme()} className='border p-7 bg-[white]'> 
//           {theme === 'light' ? 'Dark mode' : 'Light mode' }
//         </button> 
//       </ThemeProvider>
//     </>
//   );
// };
