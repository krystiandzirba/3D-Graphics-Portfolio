function PortfolioButton() {
  return (
    <button
      onClick={() => console.log("mouse click")}
      onMouseEnter={() => console.log("mouseenter")}
      onMouseLeave={() => console.log("mouseleave")}
      className="portfolio_button"
    >
      Portfolio
    </button>
  );
}

export default PortfolioButton;
