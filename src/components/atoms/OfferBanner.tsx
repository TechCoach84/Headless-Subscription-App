type OfferProps = {
  content: string;
};
export default function OfferBanner(props: OfferProps) {
  return (
    <section
      className={'w-full h-10 text-center bg-bgDarkGrey text-white pt-2'}
    >
      <h4 className={'font-bold'}>{props.content}</h4>
    </section>
  );
}
