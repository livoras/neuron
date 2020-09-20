export const enum INeuronType {
  POSITIVE = 1,
  NEGATIVE = -1,
}

export class Neuron {
  constructor(
    public type: INeuronType = INeuronType.POSITIVE,
    public to: Neuron[] = [],
  ) { }

  public tokens: any[] = []

  public state: any = null
  public nextState: any = null

  public accept(): void {
    const tokens = this.tokens
    this.tokens = []
    this.nextState = null
    if (tokens.length === 0) {
      return
    }
    for (const token of tokens) {
      if (token === -1) {
        return
      }
    }
    this.nextState = this.type === INeuronType.POSITIVE ? 1 : -1
  }

  public send(): void {
    if (this.nextState === null) { return }
    this.state = this.nextState
    this.to.forEach((to: Neuron) => {
      to.push(this.state)
    })
  }

  public push(token: any): void {
    this.tokens.push(token)
  }
}
