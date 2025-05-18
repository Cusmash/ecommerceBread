import { useLoading } from '../../contexts/LoadingContext';
import { Spinner } from '../../components/ui/Spinner';

export const GlobalSpinner = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return <Spinner />;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
      <div className="w-16 h-16 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};
