import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Blob1 from "~style/blobs/Blob1";
import {Background} from "~app/screens/Home/HomeStyling";
import {Container, InternalLink, LinkButton} from "~style/GlobalStyles";
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Impressum = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    <div>
        <Background>
            <Parallax y={['-1400px', '0px']}>
                <Blob1 />
            </Parallax>
        </Background>

        <Container>
          <br /><br />
          <InternalLink>
            <Link to={'/'}><ArrowBackIcon /> Zurück</Link>
          </InternalLink>
          <br /><br />
          <h1>Impressum</h1>
          <br />

          Angaben gemäß § 5 TMG<br /><br />

          Markus Vogel<br />
          Rugestr. 13<br />
          01069 Dresden<br /><br />

          Email: markus@vogelvlug.de<br /><br />

          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br /><br />

          Markus Vogel<br />
          Rugestr. 13<br />
          01069 Dresden<br /><br /><br />

          <h3>Hinweis auf EU Streitschlichtung</h3>

          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, zu finden unter: <br />
          <a href={"http://ec.europa.eu/consumers/odr"}>http://ec.europa.eu/consumers/odr</a><br /><br />

          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br /><br />

          <h2>Haftungsausschluss (Disclaimer)</h2>
          <h3>1. Haftung für Inhalte</h3>

          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für ihre Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden diese Inhalte umgehend entfernt.
          <h3>2. Haftung für Links</h3>

          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernen.
          <h3>3. Urheberrecht</h3>

          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet, sofern vom Urheberrecht verlangt. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden derartige Inhalte umgehend entfernt.

        </Container>
    </div>
  );
};

export default Impressum;