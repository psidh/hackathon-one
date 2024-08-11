export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="font-semibold py-6 text-3xl">Login to gitam</h1>
      <div className="py-3 flex flex-col items-center justify-start">
        <input type="text" className="py-3 px-6 rounded-full border-[#F1DEBD]" placeholder="USERNAME" />
        <input type="password" className="py-3 px-6 rounded-full border-[#F1DEBD]" placeholder="PASSWORD" />
      </div>
      <p className="text">Forget password?</p>
      <button className="bg-green-700">login</button>
    </div>
  );
}
