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
            expect(output).toHaveTextContent('PLN 100.00 = $28,57');
            cleanup();
        }
    });

    it('should render proper info about conversion when  USD -> PLN', () => {
        const amounts = [90, 80, 10, 100];

        for(let amount of amounts){
        render(<ResultBox from="USD" to="PLN" amount={amount} />);
        const output = screen.getAllByTestId('resultDiv');
        expect(output).toHaveTextContent('$90.00 = PLN 315.00');
        cleanup();
        }
    });

    it('should render proper info when same currency is selected in both options', () => {
        const currencies = ['USD', 'PLN'];

        for(let currency of currencies){
            render(< ResultBox amount={123} from={currency} to={currency} />);
            const output = screen.getAllByTestId('resultDiv');
            if(currency === 'USD'){
                // eslint-disable-next-line jest/no-conditional-expect
                expect(output).toHaveTextContent('$123.00 = $123.00');
            } else {
              // eslint-disable-next-line jest/no-conditional-expect
              expect(output).toHaveTextContent('PLN 123.00 = PLN 123.00');
            }
            cleanup();
          }
    })

    it('should render proper info when amount has negative value', () => {
        render(< ResultBox amount={-100} from='PLN' to='USD' />);
        const resultBox = screen.getByTestId('resultDiv');
        expect(resultBox).toHaveTextContent('Wrong value...');

    })
});