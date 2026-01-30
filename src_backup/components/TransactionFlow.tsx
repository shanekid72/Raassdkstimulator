import { useState } from 'react';
import { ArrowRight, Check, Heart, Share2, Download } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

type TransactionStep = 'home' | 'select-recipient' | 'review' | 'payment' | 'confirmation';

const recipients = [
  { name: 'Lara Shaw', email: 'laras@gmail.com', flag: '🇵🇭', favorite: true },
  { name: 'Mari Jones', email: 'marilove@gmail.com', flag: '🇵🇭', favorite: false },
  { name: 'Jordan Lee', email: 'jrd_lee@gmail.com', flag: '🇵🇭', favorite: false },
  { name: 'Sophia Turner', email: 'sophturner@mail.com', flag: '🇵🇭', favorite: false },
  { name: 'Noah Kim', email: 'kimnosh@mail.com', flag: '🇧🇩', favorite: false },
];

const transactions = [
  { name: 'Lara Shaw', date: 'Today, 2:34 am', amount: '1000.00', status: 'Completed' },
  { name: 'Jordan', date: '25 Jan, 25', amount: '40.95.00', status: 'Completed' },
  { name: 'Anandi', date: '24 Jan, 25', amount: '1200.00', status: 'Completed' },
];

export default function TransactionFlow() {
  const [step, setStep] = useState<TransactionStep>('home');
  const [selectedRecipient, setSelectedRecipient] = useState(recipients[0]);

  return (
    <div className="min-h-[600px] flex flex-col">
      {step === 'home' && (
        <div className="flex-1 flex flex-col p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-sm text-blue-600 mb-2">The Practical Lowest Rate in economics</div>
            <div className="text-2xl mb-6">1000.00 <span className="text-sm">USD</span></div>
            <div className="text-xs text-gray-500 mb-2">I WANT TO SEND</div>
            <div className="text-xl">15,333.43 <span className="text-sm">PHP</span></div>
          </div>

          <Button onClick={() => setStep('select-recipient')} className="w-full bg-blue-600 hover:bg-blue-700 mb-8">
            Send 1000.00 USD <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Recipients */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3>Recipients</h3>
              <Button variant="link" className="text-blue-600 p-0 h-auto">See All</Button>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {['LK', 'M.J', 'NK', 'N.K'].map((initials, index) => (
                <div key={index} className="flex flex-col items-center min-w-[60px]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center mb-1">
                    <span className="text-sm">{initials}</span>
                  </div>
                  <span className="text-xs text-gray-600">{['Lara Shaw', 'Mari Jones', 'Noah Kim', 'Nick Kan'][index].split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* History */}
          <div>
            <h3 className="mb-3">History</h3>
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                    <span className="text-sm">{transaction.name.substring(0, 2)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">{transaction.name}</p>
                      <p className="text-sm">{transaction.amount}</p>
                    </div>
                    <p className="text-xs text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Track transaction */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm mb-2">Track your transaction</h4>
            <div className="flex gap-2">
              <Input placeholder="Enter tracking code" className="flex-1" />
              <Button size="icon" variant="ghost">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {step === 'select-recipient' && (
        <div className="flex-1 flex flex-col p-6">
          <h2 className="text-xl mb-6">Select a Recipient</h2>

          <div className="mb-4">
            <Input placeholder="Search recipient" className="w-full" />
          </div>

          <div className="flex-1 overflow-y-auto">
            <p className="text-sm text-gray-600 mb-3">Favorites</p>
            {recipients.filter(r => r.favorite).map((recipient, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedRecipient(recipient);
                  setStep('review');
                }}
                className="flex items-center justify-between p-3 mb-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                    <span className="text-sm">{recipient.name.substring(0, 2)}</span>
                  </div>
                  <div>
                    <p className="text-sm">{recipient.name}</p>
                    <p className="text-xs text-gray-500">{recipient.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{recipient.flag}</span>
                  <Heart className="h-4 w-4 fill-pink-500 text-pink-500" />
                </div>
              </div>
            ))}

            <p className="text-sm text-gray-600 mb-3 mt-6">All Recipients</p>
            {recipients.filter(r => !r.favorite).map((recipient, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedRecipient(recipient);
                  setStep('review');
                }}
                className="flex items-center justify-between p-3 mb-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                    <span className="text-sm">{recipient.name.substring(0, 2)}</span>
                  </div>
                  <div>
                    <p className="text-sm">{recipient.name}</p>
                    <p className="text-xs text-gray-500">{recipient.email}</p>
                  </div>
                </div>
                <span className="text-xl">{recipient.flag}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 'review' && (
        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="icon" onClick={() => setStep('select-recipient')}>
              ←
            </Button>
            <h2 className="text-xl">Review Transfer</h2>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <span>{selectedRecipient.name.substring(0, 2)}</span>
              </div>
              <div className="flex-1">
                <p>{selectedRecipient.name}</p>
                <p className="text-sm text-gray-600">Personal Account</p>
              </div>
              <Button variant="link" size="sm" className="text-blue-600">Change</Button>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">You send</p>
              <p className="text-3xl mb-4">1000.00 <span className="text-lg">USD</span></p>
              <p className="text-xs text-gray-500 mb-2">I WANT TO SEND</p>
              <p className="text-2xl">15,333.43 <span className="text-sm">PHP</span></p>
            </div>

            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Fees</span>
                <span>0.00 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exchange rate</span>
                <span>0.00 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing time</span>
                <span>0.00 USD</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span>Total to pay</span>
                <span>1034.00 USD</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-600 mb-2 block">Promo Code</label>
              <div className="flex gap-2">
                <Input placeholder="Enter promo code" className="flex-1" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-6">
              <p className="mb-2">Terms & Conditions</p>
              <p>By clicking on "Pay" button, you Accept our Privacy Policy and Terms and Conditions.</p>
            </div>

            <Button onClick={() => setStep('payment')} className="w-full bg-blue-600 hover:bg-blue-700">
              Send PHP 1000 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 'payment' && (
        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="icon" onClick={() => setStep('review')}>
              ←
            </Button>
            <h2 className="text-xl">Payment Details</h2>
          </div>

          <div className="flex-1 flex items-center justify-center mb-6">
            <div className="text-center w-full">
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 15h10v2H7zm0-4h10v2H7zm10-6H7v2h10V5z"/>
                </svg>
              </div>

              <p className="text-sm text-gray-600 mb-2">Redirecting to PayPal...</p>
              <p className="text-xs text-gray-500 mb-6">
                We are taking you to our secured partner, PayPal, to complete payment. You will be redirected back to our website in few second.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm mb-3">Card Number</p>
                <Input placeholder="XXXX XXXX XXXX XXXX" className="mb-3" />
                <p className="text-sm mb-3">Cardholder name</p>
                <Input placeholder="Name on card" className="mb-3" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm mb-2">Expiry date</p>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div>
                    <p className="text-sm mb-2">CVV</p>
                    <Input placeholder="123" type="password" />
                  </div>
                </div>
              </div>

              <Button onClick={() => setStep('confirmation')} className="w-full bg-blue-600 hover:bg-blue-700">
                Pay <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button onClick={() => setStep('confirmation')} variant="outline" className="w-full">
            Proceed
          </Button>
        </div>
      )}

      {step === 'confirmation' && (
        <div className="flex-1 flex flex-col p-6">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center w-full">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Check className="w-16 h-16 text-white" />
              </div>

              <h2 className="text-2xl mb-2">The sending is On the way</h2>
              <Button variant="link" className="text-blue-600 mb-6">
                Track transfer
              </Button>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-3xl mb-6">15,333.43 PHP</p>

                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Receipt Number</span>
                    <span>e08h2910028 10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time & Amount</span>
                    <span>701202 / AFD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To</span>
                    <span>Event GlobalDance</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name of Payee</span>
                    <span>John Davis Link</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Event Id</span>
                    <span>09990220225</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Receipt
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Get as PDF
                  </Button>
                </div>
              </div>

              <Button onClick={() => setStep('home')} className="w-full bg-blue-600 hover:bg-blue-700">
                Done
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Step indicator */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${step === 'home' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 'select-recipient' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 'review' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 'payment' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 'confirmation' ? 'bg-blue-600' : 'bg-gray-300'}`} />
        </div>
      </div>
    </div>
  );
}
