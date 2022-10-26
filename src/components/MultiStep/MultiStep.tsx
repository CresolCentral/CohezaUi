import clsx from "clsx";
import Text from "../Text";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

const MultiStep = ({size, currentStep = 1}: MultiStepProps) => {
  return (
    <div className="flex flex-col">
      <Text size="xs" className="text-default-100">
        Passo {currentStep} de {size}
      </Text>
      <div className={'flex gap-2 mt-1'}>
        {Array.from({ length: size}, (_, i) => i+1).map(step => (
          <div className={clsx("h-1 rounded-[1px]  flex w-full", {
            "bg-default-800": currentStep < step,
            "bg-primary-900": currentStep >= step
          })} key={step}>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default MultiStep;