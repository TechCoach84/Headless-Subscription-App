interface PlatformInfoProps {
  children: string;
  lightFont?: boolean;
  uppercase?: boolean;
}
export default function PlatformInfo(props: PlatformInfoProps) {
  const {lightFont, children, uppercase} = props;
  return (
    <p
      className={`text-md ${lightFont ? `font-extralight` : `font-normal`} ${
        uppercase ? `uppercase` : `capitalize`
      }`}
    >
      {children}{' '}
    </p>
  );
}
