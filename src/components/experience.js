import React from "react"
import { Timeline, Event } from "react-timeline-scribble"
import { useTranslation } from "react-i18next"

const Experience = ({ aos }) => {
  const { t } = useTranslation()

  return (
    <div data-aos={aos}>
      <h2 className="divider line glow">{t("experience.title")}</h2>
      <Timeline>
      <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.asistensi.date")}
            title={t("experience.timeline.asistensi.company")}
            subtitle={t("currentProfession")}
          >
            {t("experience.timeline.asistensi.content")}
          </Event>
        </div>

        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.sistran.date")}
            title={t("experience.timeline.sistran.company")}
            subtitle={t("currentProfession")}
          >
            {t("experience.timeline.sistran.content")}
          </Event>
        </div>

        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.st37.date")}
            title={t("experience.timeline.st37.company")}
            subtitle={t("currentProfession")}
          >
            {t("experience.timeline.st37.content")}
          </Event>
        </div>

        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.one.date")}
            title={t("experience.timeline.one.company")}
            subtitle={t("currentProfession")}
          >
            {t("experience.timeline.one.content")}
          </Event>
        </div>
        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.two.date")}
            title={t("experience.timeline.two.company")}
            subtitle={t("frontProfession")}
          >
            {t("experience.timeline.two.content")}
          </Event>
        </div>
        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.three.date")}
            title={t("experience.timeline.three.company")}
            subtitle={t("currentProfession")}
          >
            {t("experience.timeline.three.content")}
          </Event>
        </div>

        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.four.date")}
            title={t("experience.timeline.four.company")}
            subtitle={t("currentProfession")}
          >
            {t("experience.timeline.four.content")}
          </Event>
        </div>

        <div data-aos={aos}>
          <Event
            interval={t("experience.timeline.five.date")}
            title={t("experience.timeline.five.company")}
            subtitle={t("oldProfession")}
          >
            {t("experience.timeline.five.content")}
          </Event>
        </div>
      </Timeline>
    </div>
  )
}

export default Experience
