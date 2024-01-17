import React from "react";

import { Button, Img, Input, Text } from "components";

const TwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto py-[37px] w-full">
        <div className="flex flex-col items-center justify-start mb-[13px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1256px] mx-auto md:px-5 w-full">
            <Img
              className="h-[35px]"
              src="images/img_63ffff448a15907.svg"
              alt="63ffff448a15907"
            />
            <Text
              className="ml-9 md:ml-[0] text-base text-teal-900_01 tracking-[-0.32px]"
              size="txtInterSemiBold16"
            >
              Solutions
            </Text>
            <Img
              className="h-3.5 md:ml-[0] ml-[7px] w-[13px]"
              src="images/img_arrowup.svg"
              alt="arrowup"
            />
            <Text
              className="md:ml-[0] ml-[30px] text-[15.88px] text-teal-900_01 tracking-[-0.32px]"
              size="txtInterSemiBold1588"
            >
              For Businesses
            </Text>
            <Text
              className="md:ml-[0] ml-[49px] text-base text-teal-900_01 tracking-[-0.32px]"
              size="txtInterSemiBold16"
            >
              Pricing
            </Text>
            <Text
              className="md:ml-[0] ml-[51px] text-base text-teal-900_01 tracking-[-0.32px]"
              size="txtInterSemiBold16"
            >
              Resources
            </Text>
            <Img
              className="h-3.5 md:ml-[0] ml-[7px] w-[13px]"
              src="images/img_arrowup.svg"
              alt="arrowup_One"
            />
            <Button
              className="cursor-pointer min-w-[117px] md:ml-[0] ml-[390px] text-base text-center"
              shape="round"
              color="teal_900_01"
              variant="outline"
            >
              Login
            </Button>
            <Button
              className="cursor-pointer min-w-[133px] ml-2.5 md:ml-[0] text-base text-center"
              shape="round"
              color="teal_900_01"
            >
              Sign Up
            </Button>
          </div>
          <div className="md:h-[1477px] h-[1658px] sm:h-[1695px] mt-[37px] md:px-5 relative w-full">
            <div className="absolute bg-gradient  bottom-[15%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[72px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[468px] mt-[373px] w-full">
                <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[78px]">
                  <Text
                    className="bg-clip-text bg-gradient1  sm:text-[31.33px] md:text-[33.33px] text-[35.33px] text-center text-transparent"
                    size="txtInterSemiBold3533"
                  >
                    33% less
                  </Text>
                  <Text
                    className="text-center text-teal-900_01 text-xl"
                    size="txtInterRegular20"
                  >
                    unpaid invoices
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] md:px-10 sm:px-5 px-[66px]">
                  <Text
                    className="bg-clip-text bg-gradient2  md:text-4xl sm:text-[34px] text-[38px] text-center text-transparent"
                    size="txtInterSemiBold38"
                  >
                    2x faster
                  </Text>
                  <Text
                    className="text-center text-teal-900_01 text-xl"
                    size="txtInterRegular20"
                  >
                    payment collection
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[65px]">
                  <Text
                    className="bg-clip-text bg-gradient3  sm:text-[32.96px] md:text-[34.96px] text-[36.96px] text-center text-transparent"
                    size="txtInterSemiBold3696"
                  >
                    $170 million
                  </Text>
                  <Text
                    className="text-center text-teal-900_01 text-xl"
                    size="txtInterRegular20"
                  >
                    payment processed
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[65px] md:px-10 sm:px-5 px-[51px]">
                  <Text
                    className="bg-clip-text bg-gradient4  md:text-4xl sm:text-[34px] text-[38px] text-center text-transparent"
                    size="txtInterSemiBold38"
                  >
                    70k+ talent
                  </Text>
                  <Text
                    className="text-center text-teal-900_01 text-xl"
                    size="txtInterRegular20"
                  >
                    made their life easier
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[258px] h-full inset-[0] items-center justify-center m-auto w-[90%]">
              <div className="bg-deep_purple-700 h-[700px] relative rounded-[40px] w-full">
                <Img
                  className="h-[700px] m-auto object-cover rounded-[40px] w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <div className="absolute flex flex-col gap-2 h-max inset-[0] items-center justify-center m-auto w-[55%]">
                  <Text
                    className="leading-[60.00px] sm:text-[44.01px] md:text-[50.01px] text-[58.01px] text-center text-white-A700 tracking-[-1.80px] uppercase"
                    size="txtInterExtraBold5801"
                  >
                    <>
                      PERFECTING YOUR
                      <br />
                      FREELANCE EXPERIENCE.
                    </>
                  </Text>
                  <div className="flex flex-col items-center justify-start p-0.5">
                    <Text
                      className="leading-[30.00px] my-0.5 text-center text-white-A700 text-xl"
                      size="txtInterRegular20WhiteA700"
                    >
                      <>
                        Everything solo professionals need to work with
                        businesses
                        <br />
                        and collect payment.
                      </>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer min-w-[133px] text-base text-center"
                    shape="round"
                    color="green_A100"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="bg-orange-50 h-[700px] relative rounded-[40px] w-full">
                <Img
                  className="h-[700px] m-auto object-cover rounded-[40px] w-full"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-[47%]">
                  <Text
                    className="bg-clip-text bg-gradient5  text-transparent text-xl uppercase"
                    size="txtInterRegular20"
                  >
                    GLOBAL INVOICING
                  </Text>
                  <Text
                    className="leading-[60.00px] mt-[33px] sm:text-[45.3px] md:text-[51.3px] text-[59.3px] text-teal-900_01 tracking-[-1.80px] uppercase"
                    size="txtInterExtraBold593"
                  >
                    <>
                      INVOICE WITHOUT A<br />
                      COMPANY.
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[33px] text-teal-900_01 text-xl"
                    size="txtInterRegular20"
                  >
                    <>
                      Send business-friendly tax invoices to your clients and
                      <br />
                      collect payment fast without having a legal entity.
                    </>
                  </Text>
                  <Input
                    name="link"
                    placeholder="Explore Global Invoicing"
                    className="p-0 placeholder:text-teal-900_01 text-base text-left w-full"
                    wrapClassName="mt-9 w-[44%]"
                  ></Input>
                </div>
                <Img
                  className="absolute h-[700px] inset-y-[0] my-auto object-cover right-[0]"
                  src="images/img_divwnodea6af.png"
                  alt="divwnodea6af"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1296px] mt-[170px] mx-auto md:px-5 w-full">
            <div className="bg-orange-50 h-[700px] relative rounded-[40px] w-full">
              <Img
                className="h-[700px] m-auto object-cover rounded-[40px] w-full"
                src="images/img_image3.png"
                alt="imageThree"
              />
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-[47%]">
                <Text
                  className="bg-clip-text bg-gradient5  text-[19.69px] text-transparent uppercase"
                  size="txtInterRegular1969"
                >
                  PAYMENT COLLECTION
                </Text>
                <Text
                  className="leading-[60.00px] mt-[34px] sm:text-[45.65px] md:text-[51.65px] text-[59.65px] text-teal-900_01 tracking-[-1.80px] uppercase"
                  size="txtInterExtraBold5965"
                >
                  <>
                    GET PAID IN
                    <br />
                    RECORD TIME.
                  </>
                </Text>
                <Text
                  className="leading-[30.00px] mt-[33px] text-teal-900_01 text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Offer your clients a checkout experience they&#39;ll love,
                    and
                    <br />
                    watch your invoices turn into rapid payments.
                  </>
                </Text>
                <Input
                  name="link_One"
                  placeholder="Explore Payment Collection"
                  className="p-0 placeholder:text-teal-900_01 text-base text-left w-full"
                  wrapClassName="mt-9 w-[49%]"
                ></Input>
              </div>
              <Img
                className="absolute h-[700px] inset-y-[0] my-auto object-cover right-[0]"
                src="images/img_divwnodea6af.png"
                alt="divccardgridrig"
              />
            </div>
            <div className="bg-orange-50 h-[700px] md:h-[830px] mt-[130px] relative rounded-[40px] w-full">
              <Img
                className="h-[700px] m-auto object-cover rounded-[40px] w-full"
                src="images/img_image4.png"
                alt="imageFour"
              />
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-[47%]">
                <Text
                  className="bg-clip-text bg-gradient5  text-[19.53px] text-transparent uppercase"
                  size="txtInterRegular1953"
                >
                  EARLYPAY
                </Text>
                <Text
                  className="leading-[60.00px] mt-[34px] sm:text-[45.06px] md:text-[51.06px] text-[59.06px] text-teal-900_01 tracking-[-1.80px] uppercase"
                  size="txtInterExtraBold5906"
                >
                  <>
                    GET PAID, WITHOUT
                    <br />
                    THE WAIT.
                  </>
                </Text>
                <Text
                  className="leading-[30.00px] mt-[33px] text-teal-900_01 text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Experience the comfort of accessing your money up to 60
                    <br />
                    days in advance, before your client&#39;s payment.
                  </>
                </Text>
                <Button
                  className="cursor-pointer min-w-[208px] mt-9 text-base text-center"
                  shape="round"
                  color="green_A100"
                >
                  Explore Early Pay
                </Button>
              </div>
              <Img
                className="absolute h-[700px] inset-y-[0] my-auto object-cover right-[0]"
                src="images/img_divwnodea6af.png"
                alt="divccardgridrig_One"
              />
            </div>
            <div className="bg-orange-50 h-[700px] md:h-[790px] mt-[90px] relative rounded-[40px] w-full">
              <Img
                className="h-[700px] m-auto object-cover rounded-[40px] w-full"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-[47%]">
                <Text
                  className="bg-clip-text bg-gradient5  text-[18.91px] text-transparent uppercase"
                  size="txtInterRegular1891"
                >
                  RUUL TAX
                </Text>
                <Text
                  className="leading-[60.00px] mt-[35px] sm:text-[42.6px] md:text-[48.6px] text-[56.6px] text-teal-900_01 tracking-[-1.80px] uppercase"
                  size="txtInterExtraBold566"
                >
                  <>
                    ACHIEVE 100% TAX
                    <br />
                    COMPLIANCE.
                  </>
                </Text>
                <Text
                  className="leading-[30.00px] mt-[33px] text-teal-900_01 text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Simplify your tax processes with expert assistance. Ensure
                    <br />
                    complete compliance with ease and peace of mind.
                  </>
                </Text>
                <Button
                  className="cursor-pointer min-w-[200px] mt-9 text-base text-center"
                  shape="round"
                  color="green_A100"
                >
                  Explore Ruul Tax
                </Button>
              </div>
              <Img
                className="absolute h-[700px] inset-y-[0] my-auto object-cover right-[0]"
                src="images/img_divwnodea6af.png"
                alt="divccardgridrig_Two"
              />
            </div>
            <div className="bg-orange-50 flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[100px] rounded-[40px] w-full">
              <div className="bg-gray-600 flex md:flex-1 flex-col h-[648px] md:h-auto items-start justify-center p-[100px] md:px-10 sm:px-5 rounded-bl-[40px] rounded-tl-[40px] w-[648px] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[46px] py-0.5">
                  <Text
                    className="leading-[60.00px] mb-[26px] sm:text-[45.88px] md:text-[51.88px] text-[59.88px] text-green-A100"
                    size="txtInterExtraBold5988"
                  >
                    <>
                      CUSTOMER
                      <br />
                      STORIES
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pr-[5px] py-[5px]">
                  <Text
                    className="leading-[30.00px] mb-[31px] text-orange-50 text-xl"
                    size="txtInterRegular20Orange50"
                  >
                    <>
                      I&#39;ve been meaning to thank Ruul team for
                      <br />
                      some time. Before my first transaction, they
                      <br />
                      answered all the questions my client and I<br />
                      had very patiently.
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[28.00px] mb-[42px] mt-1 text-orange-50 text-xl"
                  size="txtInterBold20"
                >
                  <span className="text-orange-50 font-inter text-left font-bold">
                    <>
                      Luca B.
                      <br />
                    </>
                  </span>
                  <span className="text-orange-50 font-aeonik text-left font-medium">
                    United States
                  </span>
                </Text>
              </div>
              <div className="bg-orange-50 h-[648px] relative rounded-br-[40px] rounded-tr-[40px] w-[648px] md:w-full">
                <Img
                  className="h-[648px] m-auto object-cover rounded-br-[40px] rounded-tr-[40px] w-[648px]"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <Img
                  className="absolute bottom-[0] h-[613px] object-cover right-[19%] w-1/2"
                  src="images/img_cleanshot20231214.png"
                  alt="cleanshot202312"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[120px] pt-0.5 px-0.5 w-full">
              <Text
                className="leading-[60.00px] md:ml-[0] ml-[98px] sm:text-[44.48px] md:text-[50.48px] text-[58.48px] text-teal-900_01"
                size="txtInterExtraBold5848"
              >
                <>
                  EVERYTHING YOU
                  <br />
                  NEED TO KNOW
                </>
              </Text>
              <div className="border-b border-blue_gray-200 border-solid flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-12 py-1 w-[85%] md:w-full">
                <Text
                  className="text-teal-900 text-xl tracking-[-0.80px]"
                  size="txtInterMedium20"
                >
                  What is Ruul?
                </Text>
                <Button className="flex h-10 items-center justify-center mb-[27px] rounded w-10">
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
              </div>
              <div className="border-b border-blue_gray-200 border-solid flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-6 py-1 w-[85%] md:w-full">
                <Text
                  className="text-teal-900 text-xl tracking-[-0.80px]"
                  size="txtInterMedium20"
                >
                  What solutions does Ruul provide?
                </Text>
                <Button className="flex h-10 items-center justify-center mb-[27px] rounded w-10">
                  <Img src="images/img_arrowdown.svg" alt="arrowdown_One" />
                </Button>
              </div>
              <div className="border-b border-blue_gray-200 border-solid flex flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-6 py-1 w-[85%] md:w-full">
                <Text
                  className="text-teal-900 text-xl tracking-[-0.80px]"
                  size="txtInterMedium20"
                >
                  Who is Ruul for?
                </Text>
                <Button className="flex h-10 items-center justify-center mb-[27px] rounded w-10">
                  <Img src="images/img_arrowdown.svg" alt="arrowdown_Two" />
                </Button>
              </div>
              <div className="border-b border-blue_gray-200 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-6 py-1 w-[85%] md:w-full">
                <Text
                  className="text-teal-900 text-xl tracking-[-0.80px]"
                  size="txtInterMedium20"
                >
                  In which regions and currencies does Ruul operate?
                </Text>
                <Button className="flex h-10 items-center justify-center mb-[27px] rounded w-10">
                  <Img src="images/img_arrowdown.svg" alt="arrowdown_Three" />
                </Button>
              </div>
              <div className="border-b border-blue_gray-200 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-6 py-1 w-[85%] md:w-full">
                <Text
                  className="text-teal-900 text-xl tracking-[-0.80px]"
                  size="txtInterMedium20"
                >
                  Are there any limitations for specific service types or
                  industries?
                </Text>
                <Button className="flex h-10 items-center justify-center mb-[27px] rounded w-10">
                  <Img src="images/img_arrowdown.svg" alt="arrowdown_Four" />
                </Button>
              </div>
              <div className="border-b border-blue_gray-200 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[98px] mt-6 py-1 w-[85%] md:w-full">
                <Text
                  className="text-teal-900 text-xl tracking-[-0.80px]"
                  size="txtInterMedium20"
                >
                  Does Ruul offer services to businesses?
                </Text>
                <Button className="flex h-10 items-center justify-center mb-[27px] rounded w-10">
                  <Img src="images/img_arrowdown.svg" alt="arrowdown_Five" />
                </Button>
              </div>
            </div>
            <div className="bg-purple-100 h-[700px] md:h-[800px] mt-[100px] relative rounded-[40px] w-full">
              <Img
                className="h-[700px] m-auto object-cover rounded-[40px] w-full"
                src="images/img_image7.png"
                alt="imageSeven"
              />
              <div className="absolute bottom-[27%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[55%]">
                <div className="flex flex-col items-center justify-start p-0.5 w-full">
                  <Text
                    className="leading-[60.00px] mb-[26px] sm:text-[45.18px] md:text-[51.18px] text-[59.18px] text-center text-teal-900_01 tracking-[-1.80px] uppercase"
                    size="txtInterExtraBold5918"
                  >
                    <>
                      SUPERCHARGE YOUR
                      <br />
                      FREELANCING.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-[5px]">
                  <Text
                    className="leading-[30.00px] mb-[31px] text-center text-teal-900_01 text-xl"
                    size="txtInterRegular20"
                  >
                    <>
                      Register now and simplify how you work with businesses.
                      <br />
                      Get paid on time, every time.
                    </>
                  </Text>
                </div>
                <Button
                  className="cursor-pointer min-w-[133px] text-base text-center"
                  shape="round"
                  color="green_A100"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[99px] pb-0.5 px-0.5 w-full">
              <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[90%] md:w-full">
                    <Text
                      className="text-teal-900_01 text-xl"
                      size="txtInterSemiBold20"
                    >
                      For Talents
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-teal-900_01 text-xl"
                      size="txtInterSemiBold20"
                    >
                      For Businesses
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[86px] text-teal-900_01 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Resources
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[130px] text-teal-900_01 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Collaborate
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[120px] text-teal-900_01 text-xl"
                      size="txtInterSemiBold20"
                    >
                      Follow Us
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[25.00px] md:mt-0 mt-1.5 text-sm text-teal-900_01"
                      size="txtInterRegular14"
                    >
                      <>
                        Global Invoicing
                        <br />
                        Payment Collection
                        <br />
                        Early Pay
                        <br />
                        Ruul Tax
                      </>
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[39px] md:mt-0 mt-[3px] text-sm text-teal-900_01"
                      size="txtInterRegular14"
                    >
                      Business Solutions
                    </Text>
                    <Text
                      className="leading-[25.00px] md:ml-[0] ml-[109px] md:mt-0 mt-1.5 text-sm text-teal-900_01"
                      size="txtInterRegular14"
                    >
                      <>
                        Pricing
                        <br />
                        Blog
                        <br />
                        About
                        <br />
                        Support
                        <br />
                        Contact Us
                        <br />
                        Careers
                        <br />
                        Download Press Kit
                      </>
                    </Text>
                    <Text
                      className="leading-[25.00px] md:ml-[0] ml-[98px] md:mt-0 mt-1.5 text-sm text-teal-900_01"
                      size="txtInterRegular14"
                    >
                      <>
                        Partners Program
                        <br />
                        Partners
                        <br />
                        Affiliate Program
                        <br />
                        HR Partner Program
                        <br />
                        Community
                      </>
                    </Text>
                    <div className="bg-orange-50 flex flex-col h-11 items-center justify-start mb-[125px] md:ml-[0] ml-[93px] p-[13px] rounded-[50%] w-11">
                      <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">
                        <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_65560c7db088e19.svg"
                            alt="65560c7db088eNineteen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-50 flex flex-col h-11 items-center justify-start mb-[125px] ml-3 md:ml-[0] p-3 rounded-[50%] w-11">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[18px]"
                            src="images/img_airplane.svg"
                            alt="airplane"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[125px] ml-3 md:ml-[0] w-11"
                      shape="circle"
                      color="orange_50"
                    >
                      <Img
                        className="h-4"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </Button>
                    <div className="bg-orange-50 h-11 mb-[125px] ml-3 md:ml-[0] rounded-[50%] w-11"></div>
                  </div>
                </div>
                <div className="md:h-[126px] h-[89px] mt-[37px] relative w-[99%] md:w-full">
                  <div className="absolute border-gray-500 border-solid border-t flex flex-col h-full inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[51px] pt-[51px] w-full">
                    <Img
                      className="h-[38px]"
                      src="images/img_divcfooterbottomlogo.svg"
                      alt="divcfooterbotto"
                    />
                  </div>
                  <div className="absolute bottom-[9%] flex flex-row items-center justify-between right-[0] w-[28%]">
                    <a
                      href="javascript:"
                      className="text-sm text-teal-900_01 underline"
                    >
                      <Text size="txtInterRegular14">Privacy Policy</Text>
                    </a>
                    <Text
                      className="text-sm text-teal-900_01 underline"
                      size="txtInterRegular14"
                    >
                      Terms Of Use
                    </Text>
                    <Text
                      className="text-[13.89px] text-teal-900_01 underline"
                      size="txtInterRegular1389"
                    >
                      DSAR
                    </Text>
                  </div>
                </div>
                <Text
                  className="mt-[45px] text-base text-center text-teal-900_01"
                  size="txtInterRegular16"
                >
                  Copyright ©2023 ruul.io
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoPage;
