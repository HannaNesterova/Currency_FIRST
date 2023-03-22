import ResultBox from './ResultBox';
import { render,screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {
        const amounts = [100, 50, 200, 350];
        for(let amount of amounts){
            render(<ResultBox from="PLN" to="USD" amount={amount} />);
            const output = screen.getAllByTestId('resultDiv');
            expect(output).toHaveTextContent('PLN 100.00 = $28.57');
            cleanup();
        }
    });
});