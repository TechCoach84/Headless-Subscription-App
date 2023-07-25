import Image from 'next/image';
import { DetailProps } from '../../../globalTypes';
import infoImage from '../../@images/info.svg';

interface TextWithIconProps {
  detail: DetailProps;
}

export default function TextWithIcon(props: TextWithIconProps) {
  const { detail } = props;
  return (
    <p
      className={'flex flex-row mb-6 pt-2 text-sm font-small'}
      data-testid={'text-with-icon-' + detail.text}
    >
      <Image
        src={detail.icon}
        height={24}
        width={18}
        style={{ marginRight: 10 }}
        alt={detail.text}
      />
      {detail.text}
      {detail.showTooltip && (
        <Image
          src={infoImage}
          height={24}
          style={{ marginLeft: 6 }}
          width={18}
          alt="Info"
        />
      )}
    </p>
  );
}
