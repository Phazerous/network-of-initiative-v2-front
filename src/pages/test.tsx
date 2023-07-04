import ModalMyApplication from '../components/ui/modals-r/modal-my-application/modal-my-application';
import { useModalContext } from '../hooks/modal-context';

export default function Test() {
  const { modal, setModal } = useModalContext();

  return (
    <>
      <button
        onClick={() =>
          setModal(
            <ModalMyApplication
              applicationId={'ae00119d-5c3b-4a5c-8c50-f2f904b054bd'}
            />
          )
        }>
        Open modal
      </button>
    </>
  );
}
