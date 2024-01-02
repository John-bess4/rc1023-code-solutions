
interface CustomButtonProps {
  text:string;
  color:string;
  onCustomClick: (text: string) => void;
}

 export function CustomButton({color, text, onCustomClick}: CustomButtonProps){

  return (
    <button style = {{backgroundColor:color}} onClick={()=> onCustomClick(color)}>
      {text}
      </button>
  );
}

export default CustomButton
