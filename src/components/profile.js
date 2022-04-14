import React from "react"
import { useTranslation, Trans } from "react-i18next"

const Profile = ({ aos }) => {
  const { t } = useTranslation()

  return (
    <div data-aos={aos}>
      <h2 className="divider line glow">
        {t("profile.title")} sfsdfs
      </h2>
      <p className="color-secondary justify p-10">
        {/* TODO: fix translation key strong */}
        <Trans i18nKey="profile.content" />
      </p>
    </div>
  )
}

export default Profile
