class HeroiDeAventura {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou ataque genérico";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
const heroi1 = new HeroiDeAventura("Herói1", 25, "mago");
heroi1.atacar();

const heroi2 = new HeroiDeAventura("Herói2", 30, "guerreiro");
heroi2.atacar();

const heroi3 = new HeroiDeAventura("Herói3", 22, "monge");
heroi3.atacar();

const heroi4 = new HeroiDeAventura("Herói4", 28, "ninja");
heroi4.atacar();
