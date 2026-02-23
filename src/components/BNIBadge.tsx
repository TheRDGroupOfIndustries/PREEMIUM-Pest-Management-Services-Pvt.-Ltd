const BNIBadge = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div
        className="bg-gradient-primary text-primary-foreground px-3 py-6 rounded-r-lg shadow-elevated"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <span className="text-xs font-heading font-semibold tracking-widest uppercase">
          Proud Member of BNI
        </span>
      </div>
    </div>
  );
};

export default BNIBadge;
