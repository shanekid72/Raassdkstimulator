import React from 'react';
import './ui/FigmaTestScreen.css';
import placeholder from '@/assets/placeholder.svg';

export default function FigmaTestScreen() {
    return (
        <div className="screen-container">
            {/* Backgrounds */}
            <div className="rectangle-background" />
            <div className="service-background" />

            {/* Promo Banner */}
            <div className="promo-container" />
            <div className="promo-icon-group" /> {/* Placeholder for Group 1171275306 */}
            <div className="promo-text">
                <span>We Promise </span>
                <span className="cta-text-bold">Lowest Rate Guarantee</span>
            </div>

            {/* Exchange Details Container/Groups */}

            {/* Labels */}
            <div className="you-send-label">Send Amount</div>
            <div className="they-receive-label">Receive Amount</div>

            {/* Amounts */}
            <div className="amount-sent">1000.00</div>
            <div className="amount-received">15,333.43</div>

            {/* Divider */}
            <div className="divider" />

            {/* Exchange Rate */}
            <div className="exchange-rate-mask">
                <div className="exchange-rate-bg" />
            </div>
            <div className="exchange-rate-text">1 AED = 15.33 PHP</div>

            {/* Currency Flag UAE */}
            <div className="flag-uae">
                <div className="uae-green" />
                <div className="uae-white" />
                <div className="uae-black" />
                <div className="uae-red" />
            </div>
            <div className="currency-text-aed">AED</div>

            {/* Currency Flag PHP */}
            <div className="flag-php">
                <div className="php-orange" />
                <div className="php-black" />
                <div className="php-green" />
                {/* Placeholder image for currency icon */}
                <div className="currency-icon" style={{ backgroundImage: `url(${placeholder})` }} />
            </div>
            <div className="currency-text-php">PHP</div>

            {/* CTA Button */}
            <div className="cta-container">
                <div className="cta-button">
                    <div className="btn-content">
                        {/* Add Icon Placeholder */}
                        <div style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
                        <div className="cta-text">
                            <span>Send </span>
                            <span className="cta-text-bold">1000.00 AED</span>
                        </div>
                        {/* Chevron Icon Placeholder */}
                        <div style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.2)', borderRadius: 1 }} />
                    </div>
                </div>
            </div>

        </div>
    );
}
