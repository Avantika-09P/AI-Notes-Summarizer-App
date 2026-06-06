import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-300 to-blue-800 opacity-30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-44 h-44 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-12">
        <div className="hidden lg:flex lg:w-20 lg:flex-col lg:items-center lg:justify-center">
          <div className="h-full w-full rounded-3xl bg-blue-900 text-white p-6 flex flex-col justify-center items-center shadow-2xl">
            <div className="transform -rotate-90 text-xl font-bold tracking-[0.35em] uppercase">
              Signup Page
            </div>
          </div>
        </div>

        <div className="grid flex-1 gap-8 rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
                Join Today
              </p>
              <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Create Account
              </h1>
              <p className="mt-4 max-w-md text-slate-600">
                Create your account to store summaries, upload notes, and manage saved content.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-3xl bg-blue-900 px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-6 text-sm text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-cyan-500 hover:text-cyan-600">
                Login
              </Link>
            </p>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 p-8 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_48%)]" />
            <div className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-20 bottom-8 h-36 w-36 rounded-full bg-cyan-300/30 blur-2xl" />

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 text-lg font-semibold">Your Study Hub</div>
                <p className="text-sm text-slate-100/90">
                  Save and organize all your AI-generated notes in one place.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-5 shadow-xl backdrop-blur-xl">
                  <p className="text-sm text-slate-100">New users</p>
                  <div className="mt-3 text-3xl font-bold">1.2k</div>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-5 shadow-xl backdrop-blur-xl">
                  <p className="text-sm text-slate-100">Active days</p>
                  <div className="mt-3 text-3xl font-bold">30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
