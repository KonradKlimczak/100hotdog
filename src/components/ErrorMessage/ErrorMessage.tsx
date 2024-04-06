import './ErrorMessage.css';

type ErrorMessageProps = {
  children: string;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { children } = props;
  return (
    <div className="container text-red-900 p-2 mt-2 inline-block">
      <p className="glitch">
        <span aria-hidden="true">{children}</span>
        {children}
        <span aria-hidden="true">{children}</span>
      </p>
    </div>
  );
};
