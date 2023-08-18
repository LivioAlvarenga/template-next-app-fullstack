import { twMerge } from 'tailwind-merge'
import { Text } from './Text'

export interface MultiStepProps {
  size: number
  currentStep?: number
  className?: string
}

export function MultiStep({
  className,
  size,
  currentStep = 1,
}: MultiStepProps) {
  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={size}
      aria-valuenow={currentStep}
      className={twMerge('space-y-2', className)}
    >
      <Text size="xs" className="text-gray-200">
        Passo {currentStep} de {size}
      </Text>
      <div className="flex gap-2">
        {Array.from({ length: size }).map((_, index) => (
          <div
            key={index}
            role="step"
            aria-label={`Passo ${index + 1}${
              currentStep === index + 1 ? ' - Etapa atual' : ''
            }`}
            aria-current={currentStep === index + 1 ? 'step' : undefined}
            data-active={currentStep >= index + 1}
            className="h-1 flex-1 rounded-px bg-gray-600 data-[active=true]:bg-gray-100"
          />
        ))}
      </div>
    </div>
  )
}
