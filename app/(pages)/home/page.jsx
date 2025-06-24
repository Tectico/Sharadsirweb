import CompanyScroller from "@/app/components/CompanyScroller";
import FormSection from "@/app/components/FormSection";
import HoverVideoSection from "@/app/components/HoverVideoSection";
import MainSection from "@/app/components/MainSection";
import VideoSection from "@/app/components/VideoSection";
import AnimateContent from "@/app/utils/AnimateContent";

const LandingPage = () => {
  return (
    <>
      <main className="min-h-screen w-full  space-y-8  ">
        {/* section 1  */}
        <MainSection />
        {/* section 2  */}
        <CompanyScroller />
        {/* section 3  */}
        <VideoSection />
        {/* section 4 */}``
        {/* <FeatureGrid /> */}
        <HoverVideoSection />
        {/* section 5 */}
        <AnimateContent>
          <section className="p-5">
            <div className="   mx-auto common-section  mt-10 bg-gradient-to-r from-gray-500 to-black overflow-hidden rounded-xl  grid grid-cols-1  md:grid-cols-2 gap-2  ">
              <div className=" p-7 lg:p-9  text-white flex flex-col items-start gap-6">
                <AnimateContent>
                  <span className="flex items-center   ">
                    <img
                      className="h-10"
                      src="\images\LynkLogo_white.png"
                      alt=""
                    />
                  </span>
                </AnimateContent>

                <AnimateContent>
                  <h2 className="text-start text-white">
                    Track user activity and boost productivity
                  </h2>
                </AnimateContent>

                <AnimateContent>
                  <p className=" text-lg leading-tight">
                    Track user activity,organise tasks, set goals, configure
                    alerts, autofill timesheet & much more...
                  </p>
                </AnimateContent>

                <FormSection
                  title={"Get started. It's FREE "}
                  className="text-lg  px-5 py-3 gap-4  primary-btn  "
                />
              </div>

              <div className=" flex items-end justify-end">
                <AnimateContent className="flex w-[80%] ">
                  <img
                    src="https://images.ctfassets.net/w8fc6tgspyjz/48U3fEhpi2LVBEmCuC4hF/bf29abf01c4e8633048df708c51c8b97/supercharge-your-productivity.png?fm=avif&q=50"
                    alt=""
                  />
                </AnimateContent>
              </div>
            </div>
          </section>
        </AnimateContent>
      </main>
    </>
  );
};

export default LandingPage;
