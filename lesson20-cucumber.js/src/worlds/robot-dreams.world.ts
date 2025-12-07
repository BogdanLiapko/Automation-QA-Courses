import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { CartModal } from '../pages/cart.modal.ts';
import { RozetkaNotebooksPage } from '../pages/rozetka-notebooks.page.ts';
import { ProductTile } from '../components/product-tile.component.ts';

export class RobotDreamsWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();

    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return RobotDreamsWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return RobotDreamsWorld.globalContext;
    }

    private  RozetkaNotebooksPage: RozetkaNotebooksPage;
    private CartModal: CartModal;

    public get rozetkaNotebooksPage(): RozetkaNotebooksPage {
        if (!this.RozetkaNotebooksPage) {
            this.RozetkaNotebooksPage = new RozetkaNotebooksPage(this.page);
        }
        return this.RozetkaNotebooksPage;
    }

    public get cartModal(): CartModal {
        if (!this.CartModal) {
            this.CartModal = new CartModal(this.page);
        }
        return this.CartModal;
    }

    public get productTiles(): ProductTile {
        return this.productTiles;
    }

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
