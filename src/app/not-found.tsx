import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-100">Page Not Found</h1>
        <p className="mt-2 text-zinc-400">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center mt-8 px-5 py-2.5 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
