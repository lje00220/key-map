import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LuBird } from 'react-icons/lu';
import KeyCap from '@/components/KeyCap';

describe('KeyCap 컴포넌트 테스트', () => {
  it('1. props로 string을 받았을 때 렌더링 테스트', () => {
    render(<KeyCap>테스트</KeyCap>);
    expect(screen.getByText('테스트')).toBeInTheDocument();
  });

  it('2. props로 icon을 받았을 때 렌더링 테스트', () => {
    render(
      <KeyCap>
        <LuBird data-testid="icon" />
      </KeyCap>,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('3. props로 className을 받았을 때 기존 스타일과 병합 테스트', () => {
    const { container } = render(<KeyCap className="my-custom-class">A</KeyCap>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass('inline-flex', 'my-custom-class');
  });

  it('4. props로 받은 className과 충돌할 때 props를 우선시하는지 테스트', () => {
    const { container } = render(<KeyCap className="rounded-md">A</KeyCap>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass('rounded-md');
    expect(el).not.toHaveClass('rounded-lg'); // 기존 스타일이 삭제되었는지 확인
  });
});
