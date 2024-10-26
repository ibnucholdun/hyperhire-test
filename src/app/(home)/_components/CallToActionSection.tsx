import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="w-full mx-auto mt-64 px-4">
      <div className=" mx-auto text-center">
        <h3 className="text-gradient bg-gradient-to-r from-gradient-start to-gradient-end  text-lg smd:text-2xl font-bold mb-4">
          영상 제작 문의
        </h3>
        <h2 className="text-2xl md:text-[44px] font-bold mb-10">
          영상 제작이 필요하다면,
          <span className="font-light">지금 문의 주세요.</span>
        </h2>
        <p className="text-base md:text-3xl opacity-60 mb-8">
          여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 <br />
          즉시 연락 드리겠습니다.
        </p>
        <p className="text-base md:text-lg font-normal text-slate-500">
          henry.lim@saltlux.com
        </p>
        <form className="md:w-[900px] mx-auto mt-20">
          <div className="flex flex-col gap-y-5">
            <Select>
              <SelectTrigger className="w-full bg-black">
                <SelectValue placeholder="영상 유형 선택" className="text-xl" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input type="text" placeholder="연락 받으실 담당자 성함" />
            <Input type="text" placeholder="이메일" />
            <Input type="text" placeholder="휴대폰 번호" />
            <Textarea placeholder="Type your message here." />
            <Input type="text" placeholder="참고 영상" />
            <p className="text-[#FF6D51] text-base font-normal text-left">
              * 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를
              적어주시면 더 정확히 안내해드리겠습니다.
            </p>
          </div>
          <div className="flex justify-between items-center my-24">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                개인정보처리방침에 동의합니다.
              </label>
            </div>
            <Button className="bg-[#FF6D51] ">문의 보내기</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToActionSection;
