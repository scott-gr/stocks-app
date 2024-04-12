export default function ViewPicker({ viewChoice, onViewChange }) {
  return (
    <>
      <div>
        <input
          type="radio"
          id="qtrNetIncome"
          name="view"
          value="qtrNetIncome"
          checked={viewChoice === "qtrNetIncome"}
          onChange={onViewChange}
        />
        <label htmlFor="qtrNetIncome">Quarterly Net Income</label>
      </div>
      <div>
        <input
          type="radio"
          id="qtrTotalRevenue"
          name="view"
          value="qtrTotalRevenue"
          checked={viewChoice === "qtrTotalRevenue"}
          onChange={onViewChange}
        />
        <label htmlFor="qtrTotalRevenue">Quarterly Total Revenue</label>
      </div>
      <div>
        <input
          type="radio"
          id="qtrShareholderEquity"
          name="view"
          value="qtrShareholderEquity"
          checked={viewChoice === "qtrShareholderEquity"}
          onChange={onViewChange}
        />
        <label htmlFor="qtrShareholderEquity">
          Quarterly Total Shareholder Equity
        </label>
      </div>
    </>
  );
}
