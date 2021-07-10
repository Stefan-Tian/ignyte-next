import { ToastGroupWrapper } from 'styles/components/Wrapper';
import { useAppSelector } from 'app/hooks';
import { selectErrors, selectSuccess } from 'features/toast/toastSlice';
import Toast from './Toast';

const ToastGroup = () => {
  const errors = useAppSelector(selectErrors);
  const success = useAppSelector(selectSuccess);

  if (errors.length === 0 && success.length === 0) {
    return null;
  }

  return (
    <ToastGroupWrapper>
      {errors.length > 0
        ? errors.map((entry, index) => (
            <Toast
              key={entry.uniqueId}
              message={entry.message}
              type="error"
              messageIdx={index}
            />
          ))
        : null}
      {success.length > 0
        ? success.map((entry, index) => (
            <Toast
              key={entry.uniqueId}
              message={entry.message}
              type="success"
              messageIdx={index}
            />
          ))
        : null}
    </ToastGroupWrapper>
  );
};

export default ToastGroup;
