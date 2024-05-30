interface CardProps {
  label: string;
  image: string;
  subLabel: string;
  caption: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-secondary bg-opacity-20 shadow-lg flex flex-col items-center text-center gap-4 rounded-lg p-4 *:text-on-primary">
      <img src={`/${props.image}`} width={100} className="rounded-full" />
      <h1 className="xl:text-xl font-bold ">{props.label}</h1>
      <h2 className="text-sm italic font-light">{props.subLabel}</h2>
      <p className="text-sm">{props.caption}</p>
    </div>
  );
}
