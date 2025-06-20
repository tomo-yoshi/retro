export const windows95Theme = {
  colors: {
    primary: '#c0c0c0',
    secondary: '#808080',
    accent: '#000080',
    text: '#222266',
    white: '#ffffff',
    background: '#008080',
    contentBg: '#f8f8f8',
  },
  borders: {
    raised: 'border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]',
    sunken: 'border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white',
  },
  hover: {
    raised: 'hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-white hover:border-b-white',
  },
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50',
  }
} as const;

export const scrollbarClasses = 'max-h-[56vh] md:max-h-[70vh] overflow-y-auto p-4 [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar-track]:bg-[#c0c0c0] [&::-webkit-scrollbar-track]:border-2 [&::-webkit-scrollbar-track]:border-[#dfdfdf] [&::-webkit-scrollbar-thumb]:bg-[#808080] [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#dfdfdf] [&::-webkit-scrollbar-thumb]:hover:bg-[#606060]';