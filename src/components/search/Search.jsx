export default function Search({ searchSymbol, onSearchInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder="stock symbol..."
        value={searchSymbol}
        onChange={(e) => onSearchInput(e.target.value)}
      />
    </div>
  );
}
