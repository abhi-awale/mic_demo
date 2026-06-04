import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="card max-w-xl p-10 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-mic-slate">
          The page you requested is not available in this demo experience.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
