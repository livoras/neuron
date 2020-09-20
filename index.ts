import { Neuron, INeuronType } from "./Neuron";

const enum RoundType {
  ACCEPT,
  SEND,
}

const main = () => {

  const n1 = new Neuron(INeuronType.POSITIVE)
  const n2 = new Neuron(INeuronType.POSITIVE)
  const n3 = new Neuron(INeuronType.POSITIVE)
  const n4 = new Neuron(INeuronType.POSITIVE)
  const n5 = new Neuron(INeuronType.POSITIVE)
  const n6 = new Neuron(INeuronType.POSITIVE)
  const n7 = new Neuron(INeuronType.NEGATIVE)
  const n8 = new Neuron(INeuronType.POSITIVE)
  const n9 = new Neuron(INeuronType.NEGATIVE)
  const n10 = new Neuron(INeuronType.NEGATIVE)
  const n11 = new Neuron(INeuronType.NEGATIVE)

  n1.to = [n2, n4, n10]
  n2.to = [n5]
  n3.to = [n2, n6, n11]
  n4.to = [n7]
  n5.to = [n8]
  n6.to = [n9]
  n7.to = [n8]
  n8.to = []
  n9.to = [n8]
  n10.to = [n9]
  n11.to = [n7]

  let neuronNet = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11]
  n1.push(1)
  n3.push(1)

  let roundType: RoundType = RoundType.ACCEPT
  let i = 0
  while (true) {
    let emptyTokenCount = 0
    neuronNet.forEach((n: Neuron) => {
      if (roundType === RoundType.ACCEPT) {
        if (n.tokens.length === 0) {
          emptyTokenCount++
        }
        n.accept()
      } else {
        n.send()
      }
    })
    if (roundType === RoundType.ACCEPT && emptyTokenCount == neuronNet.length) {
      break
    }
    roundType = roundType === RoundType.ACCEPT
      ? RoundType.SEND
      : RoundType.ACCEPT
    console.log('------------------------ ROUND -----------------------', i++)
    // console.log(neuronNet)
  }
  console.log('END -> ', n8)
}


main()
