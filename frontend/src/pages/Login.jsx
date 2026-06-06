import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-300 to-blue-800 opacity-30 pointer-events-none" />
      <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-44 h-44 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-12">
        <div className="hidden lg:flex lg:w-20 lg:flex-col lg:items-center lg:justify-center">
          <div className="h-full w-full rounded-3xl bg-blue-900 text-white p-6 flex flex-col justify-center items-center shadow-2xl">
            <div className="transform -rotate-90 text-xl font-bold tracking-[0.35em] uppercase">
              Login Page
            </div>
          </div>
        </div>

        <div className="grid flex-1 gap-8 rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
                Login Now
              </p>
              <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Welcome Back
              </h1>
              <p className="mt-4 max-w-md text-slate-600">
                Login to your AI Notes dashboard and access saved summaries, notes, and uploads.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email or Username
                </label>
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-3xl bg-blue-900 px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Login
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Or login with</span>
              <Link to="/signup" className="text-cyan-500 hover:text-cyan-600">
                Signup now
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  F
                </span>
                Facebook
              </button>
              <button className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
                  G
                </span>
                Google
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 p-8 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_48%)]" />
            <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-20 bottom-8 h-36 w-36 rounded-full bg-cyan-300/30 blur-2xl" />

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 text-lg font-semibold">AI Study Notes</div>
                <p className="text-sm text-slate-100/90">
                  Upload, summarize, and save your notes in one place.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-5 shadow-xl backdrop-blur-xl">
                  <p className="text-sm text-slate-100">Uploaded PDFs</p>
                  <div className="mt-3 text-3xl font-bold">12</div>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-5 shadow-xl backdrop-blur-xl">
                  <p className="text-sm text-slate-100">Saved Notes</p>
                  <div className="mt-3 text-3xl font-bold">8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
