import { buildMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const revalidate = 300;

export const generateMetadata = async () =>
  buildMetadata({
    title: "Datenschutz",
    description: "Informationen zur Verarbeitung personenbezogener Daten.",
    canonical: "/datenschutz"
  });

export default function DatenschutzPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Datenschutz"
        subtitle="Transparenz zur Verarbeitung personenbezogener Daten."
      />
      <Card className="space-y-6 text-sm text-slate-600">
        <div className="space-y-2">
          <p>
            Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung
            personenbezogener Daten auf dieser Website.
          </p>
          <div>
            <div className="font-semibold text-slate-900">Verantwortlicher</div>
            <p>Frank Welsch Rechtsanwälte, Barkeystraße 30, 33330 Gütersloh, Deutschland.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Kontakt</div>
            <p>E-Mail: kanzlei@frank-welsch.info</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Allgemeines zur Datenverarbeitung</div>
          <div className="font-semibold text-slate-900">Umfang der Verarbeitung personenbezogener Daten</div>
          <p>
            Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur,
            soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
            Leistungen erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten unserer
            Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in
            solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
            Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften
            gestattet ist.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">
            Rechtsgrundlage für die Verarbeitung personenbezogener Daten
          </div>
          <p>
            Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der
            betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung
            (DSGVO) als Rechtsgrundlage für die Verarbeitung personenbezogener Daten.
          </p>
          <p>
            Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages,
            dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1
            lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
            Durchführung vorvertraglicher Maßnahmen erforderlich sind.
          </p>
          <p>
            Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen
            Verpflichtung erforderlich ist, der wir unterliegen, dient Art. 6 Abs. 1 lit. c DSGVO
            als Rechtsgrundlage.
          </p>
          <p>
            Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen
            natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient
            Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
          </p>
          <p>
            Ist die Verarbeitung zur Wahrung eines berechtigten Interesses von uns oder eines
            Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des
            Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als
            Rechtsgrundlage für die Verarbeitung.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Datenlöschung und Speicherdauer</div>
          <p>
            Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt,
            sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus dann
            erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlich
            Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche
            unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann,
            wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn,
            dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss
            oder eine Vertragserfüllung besteht.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">
            Besuch der Internetseite, Anfrageheader, serverseitige Protokolldateien
          </div>
          <p>
            Beim Besuch unserer Internetseite sendet Ihr Browser automatisch im sogenannten Header
            der Anfrage verschiedene allgemeine Informationen an die Internetseite. Diese Daten sind
            im Folgenden aufgelistet:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>verwendete Browsertypen und Versionen</li>
            <li>das vom zugreifenden System verwendete Betriebssystem</li>
            <li>
              die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite
              gelangt (sogenannte Referrer)
            </li>
            <li>die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden</li>
            <li>das Datum und die Uhrzeit eines Zugriffs auf die Internetseite</li>
            <li>eine Internet-Protokoll-Adresse (IP-Adresse)</li>
            <li>
              weitere technische Informationen, die für eine Kommunikation zwischen Browser und
              Server technisch notwendig sind (vollständige Liste in Wikipedia, „Liste der HTTP-
              Headerfelder“)
            </li>
          </ul>
          <p>
            Der Server (bense.com GmbH, Schwarze-Brüder-Straße 1, 44137 Dortmund), auf dem der
            Internetauftritt betrieben wird, wertet von diesen Daten die IP-Adresse aus, um die
            Anfrage technisch bearbeiten zu können und die Antwort an das anfragende System
            zurückliefern zu können. Darüber hinaus werden von der Internetseite das Betriebssystem
            sowie der verwendete Browsertyp und die Version ausgewertet, um zu entscheiden, ob die
            mobile Version der Internetseite oder die Desktop-Version der Internetseite ausgeliefert
            werden muss.
          </p>
          <p>
            Der Zweck der Datenverarbeitung gemäß Art. 13 Abs. 1 lit. c DSGVO ist die Bereitstellung
            und der Betrieb einer technisch einwandfrei funktionierenden Internetseite.
          </p>
          <p>
            Die Rechtsgrundlage für die Verarbeitung der übermittelten Daten ist Art. 6 Abs. 1 lit.
            f DSGVO, es liegt in unserem berechtigten Interesse, eine Internetseite zu betreiben und
            unseren Interessenten Informationen bereitzustellen.
          </p>
          <p>Es findet keine Speicherung oder Protokollierung der Anfragen oder der in der Anfrage übermittelten Daten in Protokolldateien statt.</p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Cookies</div>
          <p>
            Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom
            Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer
            eine Website auf, so kann ein Cookie auf dem Computer des Nutzers gespeichert werden.
            Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige
            Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht.
          </p>
          <p>Diese Internetseite verzichtet zum Schutz unserer Nutzer auf den Einsatz von Cookies.</p>
          <p>
            Es werden jedoch auf dieser Internetseite gegebenenfalls Widgets, Plugins und/oder in
            Iframes eingebettete Inhalte von Drittanbietern eingebunden, die ihrerseits Cookies auf
            dem Endgerät des Benutzers anlegen. Ist dies der Fall, wird die Verwendung von Cookies im
            Folgenden auf dieser Seite im jeweiligen Abschnitt des entsprechenden Drittanbieterinhalts
            beschrieben und erläutert. Cookies werden auf dem Endgerät des Nutzers gespeichert und
            von diesem an die Domain des jeweiligen Drittanbieters übermittelt. Daher hat der Nutzer
            auch die volle Kontrolle über die Verwendung von Cookies. Durch eine Änderung der
            Einstellungen im Internetbrowser kann der Nutzer die Übertragung von Cookies deaktivieren
            oder einschränken. Bereits gespeicherte Cookies können jederzeit gelöscht werden. Dies
            kann auch automatisiert erfolgen. Werden Cookies für Drittanbieterinhalte in dieser
            Website deaktiviert, können möglicherweise nicht mehr alle Funktionen der
            Drittanbieterinhalte vollumfänglich genutzt werden.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">E-Mail-Kontakt</div>
          <p>
            Auf unserer Internetseite ist eine Kontaktaufnahme über die bereitgestellte E-Mail-
            Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen
            Daten des Nutzers gespeichert.
          </p>
          <p>
            Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an Dritte. Die Daten werden
            ausschließlich für die Bearbeitung der Anfrage verwendet.
          </p>
          <p>
            Der Zweck der Datenverarbeitung gemäß Art. 13 Abs. 1 lit. c DSGVO ist die Bereitstellung
            einer einfachen Kontaktmöglichkeit für unsere Website-Besucher.
          </p>
          <p>
            Die Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer
            E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Es ist unser berechtigtes
            Interesse, von unseren Website-Besuchern kontaktiert werden zu können. Zielt der E-Mail-
            Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die
            Verarbeitung Art. 6 Abs. 1 lit. b DSGVO, die Verarbeitung dient der Erfüllung eines
            Vertrags bzw. vorvertraglicher Maßnahmen.
          </p>
          <p>
            Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung
            nicht mehr erforderlich sind. Für die personenbezogenen Daten, die per E-Mail übersandt
            wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet
            ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass
            der betroffene Sachverhalt abschließend geklärt ist.
          </p>
          <p>
            Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der
            personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per E-Mail Kontakt mit uns auf,
            so kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen. In
            einem solchen Fall kann die Konversation nicht fortgeführt werden.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">E-Mail-Bewerbung</div>
          <p>
            Wenn Sie sich per E-Mail bei uns bewerben, erheben und verarbeiten wir Ihre
            personenbezogenen Daten zur Abwicklung des Bewerbungsverfahrens.
          </p>
          <p>
            Der Zweck der Datenverarbeitung gemäß Art. 13 Abs. 1 lit. c DSGVO ist die Durchführung
            eines Bewerbungsverfahrens.
          </p>
          <p>
            Die Rechtsgrundlage zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten im
            Bewerbungsverfahren ist § 26 BDSG in der ab dem 25.05.2018 geltenden Fassung sowie Art. 6
            Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen). Als Rechtsgrundlage für
            eine Aufbewahrung Ihrer Daten über das Bewerbungsverfahren hinaus dient Art. 6 DSGVO,
            insbesondere zur Wahrnehmung von berechtigten Interessen nach Art. 6 Abs. 1 lit. f,
            unser Interesse besteht dann in der Geltendmachung oder Abwehr von Ansprüchen z. B. im
            Rahmen einer Beweispflicht in einem Verfahren nach dem Allgemeinen
            Gleichbehandlungsgesetz (AGG). Für den Fall, dass Sie einer weiteren Speicherung Ihrer
            personenbezogenen Daten zugestimmt haben, werden wir Ihre Daten in unseren Bewerber-Pool
            übernehmen. Dort werden die Daten nach Ablauf von zwei Jahren gelöscht, als
            Rechtsgrundlage zur weiteren Speicherung Ihrer Daten mit Ihrer Zustimmung dient Art. 6
            Abs. 1 lit. a DSGVO.
          </p>
          <p>
            Bei einer Bewerbung per E-Mail findet die Datenübertragung grundsätzlich unverschlüsselt
            statt, es sei denn, der E-Mail Diensteanbieter des Bewerbers unterstützt eine
            Transportverschlüsselung per Secure Socket Layer. Auf Wunsch kann ein Bewerber uns nach
            vorheriger, telefonischer Abstimmung verschlüsselte E-Mails senden. Alternativ kann der
            Bewerber uns seine Bewerbungsdaten in verschlüsselten und passwortgeschützten Dateien
            senden und uns das Kennwort zur Entschlüsselung telefonisch oder auf anderem Wege
            mitteilen.
          </p>
          <p>
            Schließen wir einen Anstellungsvertrag mit einem Bewerber, werden die übermittelten Daten
            zum Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der
            gesetzlichen Vorschriften gespeichert. Wird von uns kein Anstellungsvertrag mit dem
            Bewerber geschlossen, erfolgt eine Löschung der Daten direkt nach Abschluss des
            Bewerbungsverfahrens, sofern einer Löschung keine sonstigen berechtigten Interessen des
            für die Verarbeitung Verantwortlichen entgegenstehen.
          </p>
          <p>
            Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der
            personenbezogenen Daten im Rahmen des Bewerbungsverfahrens zu widerrufen. Nimmt der
            Nutzer per E-Mail Kontakt mit uns auf, so kann er der Speicherung seiner
            personenbezogenen Daten jederzeit widersprechen. In einem solchen Fall kann die
            Konversation nicht fortgeführt werden.
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Besuchertracking / Google Analytics</div>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC., 1600
            Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“).
          </p>
          <p>
            Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer
            gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.
            Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in
            der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle
            der Aktivierung der IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse von Google
            jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in
            Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen
            und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
            Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
            Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
            mit anderen Daten von Google zusammengeführt.
          </p>
          <p>
            Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
            Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
            gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen
            können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf
            Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
            Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link
            verfügbare Browser-Plugin herunterladen und installieren:
            <br />
            <a
              className="text-slate-900 underline"
              href="http://tools.google.com/dlpage/gaoptout?hl=de"
            >
              http://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            .
          </p>
          <p>
            Eine Erfassung Ihrer Daten können Sie alternativ auch durch Klick auf den folgenden Link
            verhindern. Es wird ein Opt-Out-Cookie gesetzt, das eine zukünftige Erfassung Ihrer Daten
            auf dieser Internetseite verhindert:
          </p>
          <p>
            <a className="text-slate-900 underline" href="#">Google Analytics deaktivieren</a>
          </p>
          <p>
            Bitte beachten Sie, dass nach einer Löschung der Cookies in Ihrem Browser auch der Opt-
            Out-Cookie gelöscht wird und Sie zur wirksamen Verhinderung des Trackings den Opt-Out-
            Cookie erneut durch Verwendung des oben genannten Links setzen müssen.
          </p>
          <p>
            Weitere Informationen zum Browser-Plugin und den Datenschutzbestimmungen von Google
            Analytics finden Sie unter
            <a
              className="text-slate-900 underline"
              href="http://tools.google.com/dlpage/gaoptout?hl=de"
            >
              http://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            
            und unter
            <a
              className="text-slate-900 underline"
              href="https://support.google.com/analytics/answer/6004245"
            >
              https://support.google.com/analytics/answer/6004245
            </a>
            .
          </p>
          <p>
            Bitte beachten Sie, dass auf dieser Webseite Google Analytics um die Funktion
            "gat._anonymizeIp();" erweitert wurde, so dass die Erfassung von IP-Adressen anonymisiert
            durchgeführt wird (IP-Maskierung).
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Google Maps</div>
          <p>
            Diese Seite nutzt über eine API den Kartendienst Google Maps zur Darstellung von Karten
            und zur Erstellung von Anfahrtsplänen. Anbieter ist die Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
            speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA
            übertragen und dort gespeichert.
          </p>
          <p>
            Der Zweck der Datenverarbeitung gemäß Art. 13 Abs. 1 lit. c DSGVO ist die Einbindung und
            Darstellung des Kartendiensts Google Maps.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
            Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
            angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
            f DSGVO dar, das die Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person überwiegt.
          </p>
          <p>
            Die Datenübertragung in ein Drittland (USA) findet auf Basis eines
            Angemessenheitsbeschlusses der EU-Kommission, beruhend auf dem zwischen der EU und den
            USA vereinbarten EU-US Data Privacy Framework, statt.
          </p>
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
            Google unter
            <a className="text-slate-900 underline" href="https://policies.google.com/privacy">
              https://policies.google.com/privacy
            </a>
            
            und den Nutzungsbedingungen für Google Maps unter
            <a className="text-slate-900 underline" href="https://www.google.com/intl/de_de/help/terms_maps.html">
              https://www.google.com/intl/de_de/help/terms_maps.html
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-slate-900">Rechte der betroffenen Person</div>
          <p>
            Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener im Sinne der
            DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
          </p>
          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Auskunftsrecht</div>
            <p>
              Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob
              personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.
            </p>
            <p>
              Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen über folgende
              Informationen Auskunft verlangen:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
              <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
              <li>
                die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden
                personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;
              </li>
              <li>
                die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder,
                falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der
                Speicherdauer;
              </li>
              <li>
                das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden
                personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den
                Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;
              </li>
              <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
              <li>
                alle verfügbaren Informationen über die Herkunft der Daten, wenn die
                personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;
              </li>
              <li>
                das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß
                Art. 22 Abs. 1 und 4 DSGVO und - zumindest in diesen Fällen - aussagekräftige
                Informationen über die involvierte Logik sowie die Tragweite und die angestrebten
                Auswirkungen einer derartigen Verarbeitung für die betroffene Person.
              </li>
            </ul>
            <p>
              Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden
              personenbezogenen Daten in ein Drittland oder an eine internationale Organisation
              übermittelt werden. In diesem Zusammenhang können Sie verlangen, über die geeigneten
              Garantien gem. Art. 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu
              werden.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Recht auf Berichtigung</div>
            <p>
              Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
              Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen,
              unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich
              vorzunehmen.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Recht auf Einschränkung der Verarbeitung</div>
            <p>Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer
                bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der
                personenbezogenen Daten zu überprüfen;
              </li>
              <li>
                die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten
                ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten
                verlangen;
              </li>
              <li>
                der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht
                länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen benötigen, oder
              </li>
              <li>
                wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt
                haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen
                gegenüber Ihren Gründen überwiegen.
              </li>
            </ul>
            <p>
              Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt,
              dürfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder
              zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
              Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
              wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet
              werden.
            </p>
            <p>
              Wurde die Verarbeitung nach den oben genannten Voraussetzungen eingeschränkt, werden Sie
              von dem Verantwortlichen unterrichtet, bevor die Einschränkung aufgehoben wird.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Recht auf Löschung</div>
            <p className="font-semibold text-slate-900">(a) Löschungspflicht</p>
            <p>
              Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden
              personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist
              verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe
              zutrifft:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben
                oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
              </li>
              <li>
                Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1
                lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen
                Rechtsgrundlage für die Verarbeitung.
              </li>
              <li>
                Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es
                liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen
                gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
              </li>
              <li>die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
              <li>
                die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer
                rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten
                erforderlich, dem der Verantwortliche unterliegt.
              </li>
              <li>
                die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste
                der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
              </li>
            </ul>
            <p className="font-semibold text-slate-900">(b) Information an Dritte</p>
            <p>
              Hat der Verantwortliche die Sie betreffenden personenbezogenen Daten öffentlich gemacht
              und ist er gem. Art. 17 Abs. 1 DSGVO zu deren Löschung verpflichtet, so trifft er unter
              Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene
              Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die
              personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene
              Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von
              Kopien oder Replikationen dieser personenbezogenen Daten verlangt haben.
            </p>
            <p className="font-semibold text-slate-900">(c) Ausnahmen</p>
            <p>Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
              <li>
                zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der
                Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder
                zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung
                öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;
              </li>
              <li>
                aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß
                Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;
              </li>
              <li>
                für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder
                historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO,
                soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der
                Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder
              </li>
              <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Recht auf Unterrichtung</div>
            <p>
              Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
              gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen
              Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden,
              diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung
              mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem
              unverhältnismäßigen Aufwand verbunden.
            </p>
            <p>
              Ihnen steht gegenüber dem Verantwortlichen das Recht zu, über diese Empfänger
              unterrichtet zu werden.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Recht auf Datenübertragbarkeit</div>
            <p>
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem
              Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und
              maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht, diese Daten einem
              anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die
              personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9
                Abs. 2 lit. a DSGVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht
              </li>
              <li>und die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
            </ul>
            <p>
              In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die Sie
              betreffenden personenbezogenen Daten direkt von einem Verantwortlichen einem anderen
              Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Freiheiten und
              Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.
            </p>
            <p>
              Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener
              Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen
              Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen
              übertragen wurde.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Widerspruchsrecht</div>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die
              aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
              gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            </p>
            <p>
              Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht
              mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung
              dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>
            <p>
              Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
              betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie
              betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies
              gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
            </p>
            <p>
              Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die Sie
              betreffenden personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">
              Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
            </div>
            <p>
              Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu
              widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund
              der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">
              Automatisierte Entscheidung im Einzelfall einschließlich Profiling
            </div>
            <p>
              Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung
              - einschließlich Profiling - beruhenden Entscheidung unterworfen zu werden, die Ihnen
              gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich
              beeinträchtigt. Dies gilt nicht, wenn die Entscheidung
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem Verantwortlichen erforderlich ist,</li>
              <li>
                aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
                Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene
                Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen
                enthalten oder
              </li>
              <li>mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>
            </ul>
            <p>
              Allerdings dürfen diese Entscheidungen nicht auf besonderen Kategorien personenbezogener
              Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g gilt
              und angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten
              Interessen getroffen wurden.
            </p>
            <p>
              Hinsichtlich der in (1) und (3) genannten Fälle trifft der Verantwortliche angemessene
              Maßnahmen, um die Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren,
              wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des
              Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der
              Entscheidung gehört.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">Recht auf Beschwerde bei einer Aufsichtsbehörde</div>
            <p>
              Ihnen steht das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
              Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
              personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p>
              Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den
              Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der
              Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
            </p>
            <p>
              Eine Liste der Datenschutzbehörden mit Kontaktdaten finden Sie unter
              <a
                className="text-slate-900 underline"
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              >
                https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
              </a>
              .
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-slate-900">
              Geltendmachung Ihrer Rechte gegenüber dem Verantwortlichen
            </div>
            <p>
              Sie können Ihre Rechte zu jeder Zeit schriftlich, per E-Mail oder telefonisch geltend
              machen. Bitte wenden Sie sich an Frank Welsch Rechtsanwälte, Barkeystraße 30, 33330
              Gütersloh, Deutschland, E-Mail: kanzlei@frank-welsch.info.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
