import {InMemoryDbService} from "angular-in-memory-web-api";
import {Category} from "./pages/categories/shared/category.model"
import {Entry} from "./pages/entries/shared/entry.model"

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de COntas da Casa"},
            {id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"},
            {id: 3, name: "Lazer", description: "Cinema, parques, praias, etc"},
            {id: 4, name: "Salário", description: "Recebimento de Salário"},
            {id: 5, name: "Freelas", description: "Trabalhos como freelancer"},
        ];

        const entries: Entry[] = [
            new Entry(1, "Gas de cozinha", "compra de gas", "expense", "70,5", "20/11/2018", true, categories[0].id, categories[0]),
            new Entry(2, "Gas de cozinha", "compra de gas", "expense", "70,5", "20/11/2018", false, categories[0].id, categories[0]),
        ];

        return {categories, entries}
    }
}