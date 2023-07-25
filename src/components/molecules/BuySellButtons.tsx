import CustomButton from '../atoms/CustomButton';

export default function BuySellButtons() {
  return (
    <div className="-z-10">
      <CustomButton pageLink="#" isBuyActive={true}>
        Buy
      </CustomButton>
      <CustomButton pageLink="#" isBuyActive={false}>
        Sell
      </CustomButton>{' '}
    </div>
  );
}
