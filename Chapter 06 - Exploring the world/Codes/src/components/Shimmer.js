
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill(" ").map((e, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-img stroke animate"></div>
                    <div className="shimmer-title stroke animate"></div>
                    <div className="shimmer-tags stroke animate "></div>
                    <div className="shimmer-details stroke animate "></div>
                </div>
            ))}
    </div>
  );
};
export default Shimmer;