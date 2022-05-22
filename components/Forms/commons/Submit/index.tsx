interface Props {
  name: string;
  children?: React.ReactNode;
}

const TailwindSubmit: React.FC<Props> = ({ name, children }) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
    >
      <span className="font-medium"> {name} </span>
      {children}
    </button>
  );
};

export default TailwindSubmit;
