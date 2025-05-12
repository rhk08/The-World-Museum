import ScrollColorCard from './ScrollColorCard';

const ScrollCardList = () => {
  return (
    <section className="py-12 space-y-24">
      {[...Array(5)].map((_, i) => (
        <ScrollColorCard key={i} index={i} />
      ))}
    </section>
  );
};

export default ScrollCardList;