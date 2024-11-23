/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div>
      <section className="flex items-center gap-10 justify-center w-full h-screen">
        <img className="border rounded-xl w-[520px] h-[520px]" src="/logo.png" alt="hero" />
        <div>
          <h1 className="text-4xl font-bold">Yooooooo!</h1>
          <p className="text-lg max-w-xl mt-4">Welcome to 0xhardman&apos;s site.<br />
            My name is come from the cyberpunk 2077 edgerunner&apos;s character Mann.
            I am a full stack developer and a blockchain developer.
            Looking for a job in the field of blockchain development.
          </p>
          <div className="mt-4 text-2xl text-yellow-500">ATTENTION: THIS Site IS WIP</div>
        </div>
      </section>
    </div>
  );
}
