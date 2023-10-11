const Grid = ({ gridItems }: any) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
      {gridItems.map((item: any, index: number) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
export default Grid;
