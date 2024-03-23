import tw from 'tailwind-styled-components';

export const CustomButton = tw.button`
w-full
h-[56px]
 bg-[#4B0C67]
text-[#fff]
text-[16px]
leading-[20px]
font-bold
mt-6
rounded-[4px]
cursor-[pointer]
disabled:bg-[#6231F44D]
`;

// bg-${(props) => (props.disabled === true ? "#6231F44D" : "#6231F4")}
// cursor-[${(props) => (props.disabled === true ? "not-allowed" : "pointer")}]
