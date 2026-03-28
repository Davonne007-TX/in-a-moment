type CardProps = {
  title: string;
  description: string;
  action: string;
  className: string;
  titleClassName: string;
  descriptionClassName: string;
  buttonClassName: string;
};

export default function Card({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: CardProps) {
  return (
    <section className={className}>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </section>
  );
}
