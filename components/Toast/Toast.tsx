import Image from 'next/image';
import { useAppDispatch } from 'app/hooks';
import {
  removeErrorByIndex,
  removeSuccessByIndex,
} from 'features/toast/toastSlice';
import { LgText } from 'styles/components/Text';
import { ToastWrapper, ImageWrapper } from 'styles/components/Wrapper';
import success from 'public/green-check.svg';
import alert from 'public/red-alert.svg';
import close from 'public/close.svg';
import useFadeOut from 'hooks/useFadeOut';

interface ToastProps {
  message: string;
  messageIdx: number;
  type: 'error' | 'success';
}

const Toast = ({ message, type, messageIdx }: ToastProps) => {
  const dispatch = useAppDispatch();

  let imageSrc = success;
  let closeMessage = () => dispatch(removeSuccessByIndex(messageIdx));
  if (type === 'error') {
    imageSrc = alert;
    closeMessage = () => dispatch(removeErrorByIndex(messageIdx));
  }

  const [isToastFadingOut, closeMessageWithFadeOut] = useFadeOut(closeMessage);

  return (
    <ToastWrapper type={type} $fadeOut={isToastFadingOut}>
      <ImageWrapper width="0.26rem" height="0.26rem" opacity="0.3">
        <Image src={imageSrc} alt={type} layout="responsive" />
      </ImageWrapper>
      <LgText $marginLeft="m8" color="light">
        {message}
      </LgText>
      <ImageWrapper
        width="0.26rem"
        height="0.26rem"
        opacity="0.3"
        clickable={true}
        onClick={(_) => closeMessageWithFadeOut()}
      >
        <Image src={close} alt={type} layout="responsive" />
      </ImageWrapper>
    </ToastWrapper>
  );
};

export default Toast;
