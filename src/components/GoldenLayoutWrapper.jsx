import GoldenLayout from 'golden-layout';
import {Provider} from 'react-redux';
// import {IncrementButtonContainer} from './IncrementButton';
// import {DecrementButtonContainer} from './DecrementButton';
import {HeaderComponentContainer} from './HeaderComponent';
import {BooksComponentContainer} from './BooksComponent';
import {ChartComponentContainer} from './ChartComponent';
import {DealerComponentContainer} from './DealerComponent';
import {InventoryComponentContainer} from './InventoryComponent';
import {MarketComponentContainer} from './MarketComponent';
import {PairsComponentContainer} from './PairsComponent';
import {TerminalComponentContainer} from './TerminalComponent';

class GoldenLayoutWrapper extends React.Component {
    componentDidMount() {
        // Build basic golden-layout config       
       const config = {
        content: [{
            type: 'column',
            content:[
                {              
                    type: 'react-component',      
                    title: 'Header',
                    component: 'HeaderComponentContainer',
                    height: 10,
                },
                {
                    type: 'row',
                    content:[
                    {
                        type: 'column',
                        width: 20,
                        content:[
                            {
                                type: 'react-component',
                                title: 'Market',
                                component: 'MarketComponentContainer',
                            },
                            {
                                type: 'react-component',
                                title: 'Chart',
                                component: 'ChartComponentContainer',
                            }
                        ]           
                        
                    },{      
                        type: 'column',     
                        content:[
                            {
                                type: 'react-component',
                                title: 'Inventory',
                                component: 'InventoryComponentContainer',
                                height: 10,
                            },
                            {
                                type: 'row',
                                content:[
                                    {
                                        type: 'react-component',
                                        title: 'Pairs',
                                        component: 'PairsComponentContainer',
                                        width: 25,
                                    },
                                    {
                                        type: 'react-component',
                                        title: 'Books',
                                        component: 'BooksComponentContainer',
                                    }
                                ]    
                            }
                        ]    
                    },{         
                        type: 'react-component',   
                        title: 'LON Dealer',
                        component: 'DealerComponentContainer',
                        width: 20,
                    }
                    ]
                },{
                    type: 'react-component',
                    title: 'Terminal',
                    component: 'TerminalComponentContainer',
                    height: 10,
                }
        
            ]
        }]
       }
        function wrapComponent(Component, store) {
            class Wrapped extends React.Component {
                render() {
                    return (
                        <Provider store={store}>
                            <Component {...this.props}/>
                        </Provider>
                    );
                }
            }
            return Wrapped;
        };

        var layout = new GoldenLayout(config, this.layout);
        // layout.registerComponent('IncrementButtonContainer', wrapComponent(IncrementButtonContainer, this.context.store));
        // layout.registerComponent('DecrementButtonContainer', wrapComponent(DecrementButtonContainer, this.context.store));
        layout.registerComponent('HeaderComponentContainer', wrapComponent(HeaderComponentContainer, this.context.store));
        layout.registerComponent('BooksComponentContainer', wrapComponent(BooksComponentContainer, this.context.store));
        layout.registerComponent('ChartComponentContainer', wrapComponent(ChartComponentContainer, this.context.store));
        layout.registerComponent('DealerComponentContainer', wrapComponent(DealerComponentContainer, this.context.store));
        layout.registerComponent('InventoryComponentContainer', wrapComponent(InventoryComponentContainer, this.context.store));
        layout.registerComponent('MarketComponentContainer', wrapComponent(MarketComponentContainer, this.context.store));
        layout.registerComponent('PairsComponentContainer', wrapComponent(PairsComponentContainer, this.context.store));
        layout.registerComponent('TerminalComponentContainer', wrapComponent(TerminalComponentContainer, this.context.store));
        layout.init();

        window.addEventListener('resize', () => {
            layout.updateSize();
        });
    }

    render() {
        return (
            <div className='goldenLayout' ref={input => this.layout = input}/>
        );
    }
}

// ContextTypes must be defined in order to pass the redux store to exist in
// "this.context". The redux store is given to GoldenLayoutWrapper from its
// surrounding <Provider> in index.jsx.
GoldenLayoutWrapper.contextTypes = {
    store: React.PropTypes.object.isRequired
};

export default GoldenLayoutWrapper;


