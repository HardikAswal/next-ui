import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '400', '700'], subsets: ['latin'] });

interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  label: string;
  size?: 's' | 'm' | 'l' | 'xl';
  loading?: boolean;
  error?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type,
  label,
  size,
  loading,
  error,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={poppins.className}
      style={{
        padding: '8px 16px',
        background:
          type === 'primary'
            ? '#1073ff'
            : type === 'secondary'
            ? '#fff'
            : type === 'tertiary'
            ? '#f8f8f8'
            : '#fff',
        border:
          type === 'primary' || type === 'secondary'
            ? '1px solid #1073ff'
            : type === 'tertiary'
            ? '1px solid #f8f8f8'
            : '1px solid #fff',
        cursor: 'pointer',
        color:
          type === 'primary'
            ? '#fff'
            : type === 'secondary'
            ? '#1073ff'
            : type === 'tertiary'
            ? '#474747'
            : '#1073ff',
        textDecoration: type === 'ghost' ? 'underline' : '',
      }}
    >
      {label}
    </button>
  );
};
