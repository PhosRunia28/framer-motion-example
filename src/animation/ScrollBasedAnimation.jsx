import CardBiasa from "../component/CardBiasa";
export default function ScrollBasedAnimation() {
  return (
    <div>
      <div className="h-screen bg-yellow-400"></div>
      <div className="h-screen bg-red-400"></div>
      <div className="space-y-4 border border-red-600">
        <CardBiasa />
        <CardBiasa />
        <CardBiasa />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
